
      // 
      // Javascript generated by HTML2 Toolkit plugin
      // 
      var tree;
      
      function treeInit() {
      tree = new YAHOO.widget.TreeView("treeDiv1");
      var root = tree.getRoot();

      
var objd64e89 = {
  label: " DITA For Small Teams",
  href: "topics/dita-for-small-teams.html", 
  target:"contentwin"
};
var d64e89 = new YAHOO.widget.TextNode(objd64e89, root, false);

var objd64e114 = {
  label: " DITA for Small Teams Tools",
  href: "topics/dfst-tools.html", 
  target:"contentwin"
};
var d64e114 = new YAHOO.widget.TextNode(objd64e114, d64e89, false);

var objd64e139 = {
  label: " git: Distributed and Shared Access to Content",
  href: "topics/tools-git.html", 
  target:"contentwin"
};
var d64e139 = new YAHOO.widget.TextNode(objd64e139, d64e114, false);

var objd64e164 = {
  label: " eXist-db: Enabling Search and Link Management",
  href: "topics/tools-exist-db.html", 
  target:"contentwin"
};
var d64e164 = new YAHOO.widget.TextNode(objd64e164, d64e114, false);

      
      tree.draw(); 
      } 
      
      YAHOO.util.Event.addListener(window, "load", treeInit);       
    