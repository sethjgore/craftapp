app.directive('clearFirstFocus', [function () {
  return {
    restrict: 'E',
    template: "<div id="mc_embed_signup">
<form action="//green-bridge.us7.list-manage.com/subscribe/post?u=b7af9354a715fa7993438116f&amp;id=54136ecd26" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>

<div class="mc-field-group">
  <!--<label for="mce-EMAIL">Email Address </labe>-->
  <input type="email" value="{{email}}" name="EMAIL" class="is__text--c-shade fyi__Oswald landing__email is__ctr is__text--size--5vw is100vw required email" id="mce-EMAIL" first-focus-clear>
</div>
  <div id="mce-responses" class="clear">
    <div class="response" id="mce-error-response" style="display:none"></div>
    <div class="response" id="mce-success-response" style="display:none"></div>
  </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;"><input type="text" name="b_b7af9354a715fa7993438116f_54136ecd26" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="landing__email--submit button"></div>
</form>
</div>"
    }
  };
}])