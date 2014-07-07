$(function(){
  var disqus_shortname = 'etutsco',
      dsq = document.createElement('script'); 
                    
  dsq.type = 'text/javascript'; 
  dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);

  var s = document.createElement('script'); 
  s.async = true;
  s.type = 'text/javascript';
  s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';
  (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);

  if ($('#editor').length > 0) {
    var editor = ace.edit("editor");
  
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
    editor.getSession().setUseWorker(false);
  }
});