<?php
    $themeClass = '';
    // Change themes according to cookies
    if (!empty($_COOKIE['theme']) && $_COOKIE['theme'] == 'dark') {
      $themeClass = 'dark-theme';
    }
    else if (!empty($_COOKIE['theme']) && $_COOKIE['theme'] == 'light') {
      $themeClass = 'light-theme';
    }
?>