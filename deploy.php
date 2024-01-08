<?php
// Make sure this path points to the git directory in your cPanel
$output = shell_exec('cd /home/ingressdefi/public_html && git pull 2>&1');
echo "<pre>$output</pre>";
?>