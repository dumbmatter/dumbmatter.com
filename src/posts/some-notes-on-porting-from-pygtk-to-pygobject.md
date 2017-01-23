---
date: 2012-02-01
layout: post.html
tags: basketball-gm, programming, pygobject, pygtk
title: Some notes on porting from PyGTK to PyGObject
---

<p>These are some notes I wrote as porting my on-again off-again hobby project <a href="https://github.com/jdscheff/basketball-gm/">Basketball GM</a> from <a href="http://www.pygtk.org/">PyGTK</a> to <a href="https://live.gnome.org/PyGObject">PyGObject</a>. I did this because PyGTK is dead and stuck on GTK+ 2, and PyGObject is the future and already on GTK+ 3 through the use of GObject introspection. So, others going through the same transition might (or might not) find this useful. You can see the code I'm referring to on <a href="https://github.com/jdscheff/basketball-gm/tree/pygobject">the pygobject branch on GitHub</a>.</p>

<!--more-->

<p>Based on <a href="https://live.gnome.org/PyGObject/IntrospectionPorting#Porting_from_PyGTK_2_to_PyGI_GTK_3">what the documentation told me me</a>, I ran <code><a href="http://git.gnome.org/browse/pygobject/tree/pygi-convert.sh">pygi-convert.sh</a></code> on my code. I didn't expect this to work perfectly, but at least it did produce something that ran (<i>i.e.</i> created the main window).</p>

<p>However, there were tons of bugs with the functionality and a ton of error messages. Here is a probably incomplete list of things I did to fix those problems:</p>

<ul>
<li><p><code>Gtk.main_iteration</code> no longer takes any arguments. Removing them seems to fix the error with no consequences. I probably didn't need to be messing with the arguments there to begin with.</p></li>
<li><p>I had to manually set the "Show text" parameter of my <code>Gtk.ProgressBar</code> to "Yes" in Glade to get text to display on top of my <code>Gtk.ProgressBar</code>. I guess the default setting changed?</p></li>
<li><p><code>gtk.Tooltips</code> was previously deprecated (which I did not know..), but now it's totally gone and replaced by <code>Gtk.Tooltip</code>. If I had been using the <code>gtk.Tooltip</code> API to begin with, as I should have been, this wouldn't have been an issue</p></li>
<li><p><code>gtk.ComboBox.get_active_text</code> is gone, so I worked around that by using <code>Gtk.ComboBox.get_active_iter</code>, which seems more convoluted, but whatever.</p></li>
<li><p>If you tell a <code>Gtk.ListStore</code> it's getting an <code>int</code>, it only wants an <code>int</code>. It won't take a <code>float</code> and do the best it can like it used to. This is good because <a href="https://github.com/jdscheff/basketball-gm/commit/40c30a4a8f3cf9fe363fc8a53d02fb863a2c80a6">it helped me find an obvious typo in my SQL schema</a>. But it's bad because because <a href="http://www.sqlite.org/lang_aggfunc.html">SQLite's <code>TOTAL</code> function will return a <code>FLOAT</code> even if you call it on an <code>INTEGER</code> column</a>. This is especially annoying as I have <a href="https://github.com/jdscheff/basketball-gm/blob/pygobject/bbgm/common.py">some convenience functions</a> to handle the boilerplate for <code>TreeView</code>s which relied on the old behavior from PyGTK. So I ended up <a href="https://github.com/jdscheff/basketball-gm/commit/3fdfebd1b2e8738106d264da8220abfa78de9372">manually comparing</a> the column type of my <code>Gtk.ListStore</code> (from <code>Gtk.ListStore.get_column_type</code>) with <code>GObject.TYPE_INT</code> so I could manually make the input an <code>int</code> if necessary.</p></li>
<li><p>I use <code>Gtk.TreeViewColumn.set_cell_data_func</code> to truncate floats to one decimal place in <code>TreeView</code>s. <a href="https://github.com/jdscheff/basketball-gm/commit/7394ac554fba264ea81967089cfad2b5accbde96">The second parameter (the data function) now requires a mandatory fifth parameter</a> which I don't think I have any use for.</p></li>
<li><p>I had to <a href="https://github.com/jdscheff/basketball-gm/commit/c5fff4f510f1bf891fde21a28f5cf97d03cdb90d">switch to a different way of checking if a window is open</a>. I'm not sure why, to be honest.</p></li>
<li><p>It seems you can no longer do <code>del liststore[i]</code> to delete a row from a <code>Gtk.ListStore</code>. You need to do something much less Pythonic, like <code>liststore.remove(liststore.get_iter(i))</code>.</p></li>
<li><p>To temporarily raise a window that is minimized or in the background, <a href="http://faq.pygtk.org/index.py?req=all#10.25">this solution from the old PyGTK FAQ</a> doesn't work anymore. Instead, the better solution (as I learned on <a href="http://stackoverflow.com/questions/9054462/how-do-i-raise-a-window-that-is-minimized-or-covered-with-pygobject">Stack Overflow</a>) is to just call <code>Gtk.Window.present()</code>. This same method would have worked in PyGTK, but I wasn't aware of it.</p></li>
<li><p><code>TreePath</code> objects no longer support indexing. So, if you want to access the numerical values in a <code>TreePath</code>, you have to call the <code>get_indices</code> method on it.</p></li>
<li><p>I encountered <a href="http://stackoverflow.com/questions/9058987/dialog-breaks-when-using-gtkbuilder-to-automatically-connect-signals-but-works">a very strange bug related to connecting to the <code>response</code> signal from a <code>Gtk.Dialog</code> in Glade</a>, and I wasn't able to figure out the root cause, so I worked around it by manually connecting to that signal.</p></li>
<li><p>I ran into <a href="http://stackoverflow.com/questions/9051163/formatting-a-spinbuttons-display-in-pygobject-gtk3">another issue that might be a bug in PyGObject</a>, which I worked around by making my UI uglier and clunkier.</p></li>
</ul>

<p>I'm not totally done. I'm still having some performance issues with updating large <code>Gtk.TreeView</code>s, and I need to do some more testing to find any remaining bugs. But for the most part... things work. And porting wasn't that difficult or time consuming.</p>

<p>So in conclusion, the new bindings for GTK+ 3 are less Pythonic than PyGTK was, they're more glitchy, and there's less documentation. But they work well enough for most purposes. That's not really a useful conclusion, as I'm just repeating conventional wisdom, which turned out to be correct in this case.</p>

<p>Is porting worth the effort? In 2012, it would probably have been more efficient to put this time towards porting my software to a web app. But I'm just doing this for fun.</p>

<h2 id="comments">4 archived comments</h2>

<ol id="commentlist">

    <li class="comment even thread-even depth-1" id="comment-52393">
    <p>Try compiling the introspection code on ANY version of Xcode shipped in the last 2+ YEARS.  The second that GIR so-called lexer hits  it explodes on the blocking code.</p>
<p>The blocking code has beed submitted to the standards bodies as a proposed extension to the C/C++/Objective-C standards.</p>
<p>This would take a couple of productions in the lexer/parser to deal with.</p>
<p>The so-called "maintainers" of the lexer couldn't get around to adding things like "__asm__", "__attribute__", etc, well-documented in the "ansi" paragraph of the GCC "man page". added to the lexer until users yelled.</p>
<p>Do those "miracle people" even READ the FM?</p>
<p>RTFM!!</p>
<p>My biggest frustration is that is has been so many years since "The Red Dragon Book" or I'd just write the damned things myself.</p>
<p>And we are ALL supposed to be falling all over ourselves to make ourselves totally dependant on "developers" who can not/will not RTFM?</p>
    <p><cite>Comment by Bob Maynard &#8212; October 26, 2012 @ <a href="#comment-52393">6:56 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-52891">
    <p>The problem, Bob, is that the FM seems to change way too often.  To which particular version of the FM do you refer?  I would love to R the FM, if you would point me at a version that is stable and trustworthy.</p>
<p>In PyGObject, the FM is produced from the code itself, via an apparently partially written and unsupported tool that seems to want to introspect everything via gobject and magically produce decent reliable documents.  This FM will change whenever the code does; &#8216;a good idea!' I hear the shouts- and it might have been, except that right now, three years after the decision to abandon PyGTK, there is still no usable FM for PyGObject at all.</p>
<p>Compared to commercial solutions, PyGObject is a joke.  The API specification is continuously in flux, and not stable long enough for anyone to seriously consider adopting it.  But hey, who cares?  at least the devs are having loads of fun!</p>
    <p><cite>Comment by Paul Sephton &#8212; October 31, 2012 @ <a href="#comment-52891">6:56 am</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-291275">
    <p>This will weirdly sound like spam, but thanks for great notes.</p>
<p>I'm in the process of porting an app for pygtk2 -&gt; pygobect3 and found<br />
these notes useful on multiple occasions. I actually ended up doing in<br />
a few phases, since that app previously had to support back to gtk2-2.10<br />
and libglade. really old gtk2 -&gt; recent ish gtk2, libglade -&gt; builder,<br />
recent gtk -&gt; gtk3 via pygtkcompat, then pygi-convert to pure gtk3. </p>
<p>Some of my notes:</p>
<p>1. importing from gtk into a module (ie, &#8216;from gtk import Widget') confuses pygi-convert.sh, so fix that first.</p>
<p>2, If still using libglade, that needs to be ported. <a href="https://developer.gnome.org/gtk2/stable/gtk-migrating-GtkBuilder.html" rel="nofollow">https://developer.gnome.org/gtk2/stable/gtk-migrating-GtkBuilder.html</a> has reasonable notes on that. gtk-builder-convert takes care of most of it.</p>
<p>3. Any objects that subclass gobject.GObject need to be updated to not use self.__gobject_init__(), but normal python super class init (either GObject.GObject.__init__ or super($classnamehere).__init__())</p>
<p>4. If using threads but not for the gui, gdk.threads_init() -&gt; GObject.threads_init()</p>
<p>5. Gtk.TextBuffer.get_text takes an additional required arg &#8216;include_hidden_chars'</p>
<p>6. Make sure your test cases aren't quietly doing an &#8216;import gtk' to get the constants, otherwise nosetests etc will segfault in unhelpful ways. (That may have caused an undue amount of cursing).</p>
<p>7. Replace get_parent_window() with get_toplevel() [for most cases...] Especially if you used gdkWindow.window. Also read the get_toplevel notes about multiple top level windows.</p>
    <p><cite>Comment by Adrian Likins &#8212; May 7, 2015 @ <a href="#comment-291275">10:10 am</a></cite> </p>
    </li>

    <li class="comment byuser comment-author-admin bypostauthor odd alt thread-odd thread-alt depth-1" id="comment-291325">
    <p>Thanks for the comment Adrian! A few years from now, someone else will post here thanking you for all your notes 🙂</p>
    <p><cite>Comment by <a href='http://www.jeremyscheff.com/' rel='external nofollow' class='url'>Jeremy Scheff</a> &#8212; May 7, 2015 @ <a href="#comment-291325">5:14 pm</a></cite> </p>
    </li>


</ol>