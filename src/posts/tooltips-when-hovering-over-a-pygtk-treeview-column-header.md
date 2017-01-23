---
date: 2011-07-17
layout: post.html
tags: Programming, PyGTK
title: Tooltips when hovering over a PyGTK TreeView column header
---

If you search for information about showing tooltips in a PyGTK TreeView, most of what you find is about tooltips for <a href="http://faq.pygtk.org/index.py?req=show&file=faq13.046.htp">hovering over rows</a>. Here, I'll explain how to show a tooltip when you hover over a column header in a PyGTK TreeView.

<!--more-->

GTK+ has this <a href="http://www.pygtk.org/docs/pygtk/class-gtktooltip.html">nice tooltips class</a> which generally works by doing something like this:

    tooltips = gtk.Tooltips()
    tooltips.set_tip(widget, 'TOOLTIP TEXT')

Then, when your mouse hovers over the `widget`, TOOLTIP TEXT will appear in a tooltip. But for TreeView columns, there is a slight complication: what is the widget? Well, you have to do something like this:

    tooltips = gtk.Tooltips()
    column = gtk.TreeViewColumn()
    column_header = gtk.Label('Column Header')
    column_header.show()
    column.set_widget(column_header)
    tooltips.set_tip(column_header, 'TOOLTIP TEXT')

This code is a bit ugly, as normally you would just do `column = gtk.TreeViewColumn('Column Header')` without making a separate `gtk.Label`. But, if you do it that way, then (<a href="http://www.pygtk.org/docs/pygtk/class-gtktreeviewcolumn.html#method-gtktreeviewcolumn--get-widget">as far as I can tell</a>) there is no way to get the label widget, and thus no way to set a tooltip.

Here is an example that you can run. This is based on the <a href="http://www.pygtk.org/pygtk2tutorial/examples/basictreeview.py">basictreeview.py</a> example from the <a href="http://www.pygtk.org/pygtk2tutorial/">PyGTK Tutorial</a>.

    #!/usr/bin/env python

    # example basictreeview.py

    import pygtk
    pygtk.require('2.0')
    import gtk

    class BasicTreeViewExample:

        # close the window and quit
        def delete_event(self, widget, event, data=None):
            gtk.main_quit()
            return False

        def __init__(self):
            # Create a new window
            self.window = gtk.Window(gtk.WINDOW_TOPLEVEL)

            self.window.set_title("Basic TreeView Example")

            self.window.set_size_request(200, 200)

            self.window.connect("delete_event", self.delete_event)

            # create a TreeStore with one string column to use as the model
            self.treestore = gtk.TreeStore(str)

            # we'll add some data now - 4 rows with 3 child rows each
            for parent in range(4):
                piter = self.treestore.append(None, ['parent %i' % parent])
                for child in range(3):
                    self.treestore.append(piter, ['child %i of parent %i' %
                                                  (child, parent)])

            # create the TreeView using treestore
            self.treeview = gtk.TreeView(self.treestore)

            # create the TreeViewColumn to display the data
            tooltips = gtk.Tooltips()
            self.tvcolumn = gtk.TreeViewColumn()
            column_header = gtk.Label('Column 0')
            column_header.show()
            self.tvcolumn.set_widget(column_header)
            tooltips.set_tip(column_header, 'TOOLTIP TEXT')

            # add tvcolumn to treeview
            self.treeview.append_column(self.tvcolumn)

            # create a CellRendererText to render the data
            self.cell = gtk.CellRendererText()

            # add the cell to the tvcolumn and allow it to expand
            self.tvcolumn.pack_start(self.cell, True)

            # set the cell "text" attribute to column 0 - retrieve text
            # from that column in treestore
            self.tvcolumn.add_attribute(self.cell, 'text', 0)

            # make it searchable
            self.treeview.set_search_column(0)

            # Allow sorting on the column
            self.tvcolumn.set_sort_column_id(0)

            # Allow drag and drop reordering of rows
            self.treeview.set_reorderable(True)

            self.window.add(self.treeview)

            self.window.show_all()

    def main():
        gtk.main()

    if __name__ == "__main__":
        tvexample = BasicTreeViewExample()
        main()

If you're setting the tooltip in a different place in your code than right where you set the header text (<i>i.e.</i>, if the label widget is not accessible), you can use the <a href="http://www.pygtk.org/docs/pygtk/class-gtktreeviewcolumn.html#method-gtktreeviewcolumn--get-widget">`get_widget`</a> method on the column to get the label widget.

<h2 id="comments">2 archived comments &raquo;</h2>

<ol id="commentlist">

    <li class="comment even thread-even depth-1" id="comment-1670">
    <p>How about a tutorial showing how to use gtk3 with css, which is the main feature of gtk3.</p>
    <p><cite>Comment by craig &#8212; January 7, 2012 @ <a href="#comment-1670">6:49 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-14745">
    <p>In the meanwhile you can use widget.set_tooltip_text(aString) for setting a tooltip text for all widgets, as it inherits from class gtk.Widget:</p>
<p>column = gtk.TreeViewColumn()<br />
column_header = gtk.Label(&#8216;Column Header')<br />
column_header.set_tooltip_text(&#8216;TOOLTIP TEXT')<br />
column_header.show()<br />
column.set_widget(column_header)</p>
    <p><cite>Comment by Chris X. &#8212; April 2, 2012 @ <a href="#comment-14745">4:52 pm</a></cite> </p>
    </li>


</ol>
