#!/usr/bin/python

import cgi
import cgitb
cgitb.enable() #debug

#instance of FieldStorage
form = cgi.FieldStorage()

if "varname0" not in form or "imgsrc" not in form:
    print "<H1>Error</H1>"
    print "PLease fill in the varname0 and imgsrc fields."
    return

#get data
varname0 = form.getvalue('varname0')
varname1 = form.getvalue('varname1')
varname2 = form.getvalue('varname2')
imgsrc = form.getvalue('imgsrc')


print "Content-Type: text/html"
print
print "<TITLE>CGI script output</TITLE>"
print "<H1>This is my first CGI script</H1>"
print "Hello, world!"
