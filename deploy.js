const { spawn } = require("child_process");

const DOMAIN = "dumbmatter.com";
const BUILD_FOLDER = "./build";

const NUM_RETRIES = 10;
const mySpawn = async (command, args) => {
	for (let attempt = 0; attempt <= NUM_RETRIES; attempt++) {
		console.log(`${command} ${args.join(" ")}`);

		const exitCode = await new Promise((resolve, reject) => {
			const cmd = spawn(command, args, { stdio: "inherit" });

			cmd.on("error", (error) => {
				reject(error);
			});
			cmd.on("close", (code) => {
				resolve(code);
			});
		});

		if (exitCode === 0) {
			// Success!
			return;
		}

		if (exitCode === 255 && attempt < NUM_RETRIES) {
			await setTimeout(2000);
			console.log(
				`Retrying after error code ${exitCode} (attempt #${attempt + 1})`,
			);
		} else {
			throw new Error(`child process exited with code ${exitCode}`);
		}
	}
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
