const { spawn } = require("child_process");

const DOMAIN = "dumbmatter.com";
const BUILD_FOLDER = "./build";

const mySpawn = (command, args) => {
	return new Promise(resolve => {
		console.log(`${command} ${args.join(" ")}`);

		const cmd = spawn(command, args, { shell: true, stdio: "inherit" });
		cmd.on("close", code => {
			if (code !== 0) {
				console.log(`child process exited with code ${code}`);
				process.exit(code);
			}
			resolve();
		});
	});
};

const deploy = async () => {
	const target = `dh_yb52xg@dumbmatter.com:/home/dh_yb52xg/${DOMAIN}`;

	// Copy "files" separately, because we never want to delete from those folders
	const copyAndKeep = ["files"];
    for (const folder of copyAndKeep) {
        console.log(`Copying "${folder}" folder...`);
        await mySpawn("rsync", [
            "-hrl",
            `${BUILD_FOLDER}/${folder}/`,
            `${target}/${folder}/`,
        ]);
    }

	console.log("Copying other files...");
	const excludes = [
		...copyAndKeep,
		".well-known",
	];
	await mySpawn("rsync", [
		"-hrl",
		"--delete",
		...excludes.flatMap(folder => ["--exclude", `/${folder}`]),
		`${BUILD_FOLDER}/`,
		target,
	]);

	console.log("\nDone!");
};

(async () => {
    const header = `Deploying ${DOMAIN}`;
    const separator = "=".repeat(header.length);
    console.log(`${header}\n${separator}\n`);
    await deploy();
})();
