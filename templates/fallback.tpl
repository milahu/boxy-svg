<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-weight: 400;
    font-size: 18px;
    font-family: BlinkMacSystemFont, Cantarell, "Segoe UI", SegoeUI, Inter, Roboto, "Helvetica Neue", Arial, sans-serif;
    line-height: 1.7;
    color: #414141;
    background: #f6f6f6;
    text-align: center;
  }

  body {
    width: 100%;
    height: 100%;
  }

  body > section {
    width: 100%;
  }

  body > section > .inner {
    max-width: 730px;
    margin: 0 auto;
  }

  /**
   * Branding
   */

  #branding > .inner {
    padding: 30px 20px;
  }

  #branding img {
    display: block;
    margin: 0 auto;
  }

  #branding h1 {
    display: block;
    margin: 7px 0px 0px;
    font-size: 40px;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1.2;
    color: rgba(0, 0, 0, 0.85);
  }

  #branding h2 {
    width: fit-content;
    margin: 0 auto;
    padding: 7px 10px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1;
    text-transform: uppercase;
    color: #000000;
    background: white;
    border-width: 1px;
    border-style: solid;
    border-color: #cccccc;
    border-radius: 4px;
  }

  /**
   * Intro
   */

  #intro {
    background: #ececec;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
  }

  #intro > .inner {
    padding: 20px 20px;
  }

  /**
   * Error
   */

  #error > .inner {
    padding: 50px 20px;
  }

  #error p {
    color: #c82524;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    border: 4px solid #c92524;
    border-radius: 4px;
  }

  /**
   * Screenshots
   */

  #screenshots > .inner {
    padding: 40px 20px;
  }

  #screenshots img {
    display: block;
    width: 100%;
    border: 1px solid rgb(213, 213, 213);
    border-radius: 4px;
  }

  /**
   * Browsers
   */

  #browsers {
    background: #ececec;
    border-top: 1px solid #cccccc;
  }

  #browsers > .inner {
    padding: 30px 20px;
  }

  #browser-links {
    width: fit-content;
    margin: 0 auto;
  }

  #browser-links a {
    display: inline-block;
    margin: 14px;
    color: inherit;
    text-decoration: none;
  }

  #download-p {
    margin-top: 20px;
  }

  #download-links {
    display: flex;
    margin-top: 14px;
  }

  #download-links a {
    display: block;
    width: 100%;
  }
  #download-links a#flathub-link {
    margin: 0 10px;
  }

  #download-links img {
    width: 100%;
    border: 1px solid #777777;
    border-radius: 4px;
  }

  /**
   * Footer
   */

  #footer {
    font-size: 14px;
    background: #dcdcdc;
    border-top: 1px solid #c2c2c2;
  }

  #footer > .inner {
    padding: 15px 20px;
  }

  #footer a {
    color: inherit;
  }
</style>

<section id="branding">
  <div class="inner">
    <a id="home-anchor">
      <img src="/images/boxy-svg.svg" width="100px" height="100px" alt="Boxy SVG logo">
    </a>
    <h1>Boxy SVG</h1>
    <h2><span>Scalable Vector Graphics Editor</span></h2>
  </div>
</section>

<section id="intro">
  <div class="inner">
    <p><strong>Boxy SVG</strong> project goal is to create the best tool for editing SVG files.</p>
    <p>For beginners as well as for professional <strong>web designers</strong> and <strong>web developers</strong>.</p>
    <p>On any device and operating system.</p>
  </div>
</section>

<section id="screenshots">
  <div class="inner">
    <img src="https://storage.boxy-svg.com/artworks/-M538anEpEaHc8nctPwz.svg" alt="Boxy SVG screenshot" style="">
  </div>
</section>

<section id="error" hidden>
  <div class="inner">
    <p>Error - can't load the page (unsupported web browser)</p>
  </div>
</section>

<section id="browsers">
  <div class="inner">
    <p>To access Boxy SVG <strong>web app</strong> and <strong>support forum</strong> open this page with:</p>

    <div id="browser-links">
      <a href="https://www.google.com/chrome" class="item" target="_blank" rel="noopener">
        <img src="https://storage.boxy-svg.com/artworks/-MPSjmOBBhiGMzosIRXq.svg" width="85px" height="85px"/>
        <p>Chrome</p>
      </a>
      <a href="https://www.chromium.org/Home" class="item" target="_blank" rel="noopener">
        <img src="https://storage.boxy-svg.com/artworks/-N4OC9cIJGCj4SKaVn82.svg" width="85px" height="85px"/>
        <p>Chromium</p>
      </a>
      <a href="https://www.microsoft.com/edge" class="item" target="_blank" rel="noopener">
        <img src="https://storage.boxy-svg.com/artworks/-MPSjg6Dg9kKD6DCEDdZ.svg" width="85px" height="85px"/>
        <p>Edge</p>
      </a>
      <a href="https://vivaldi.com" class="item" target="_blank" rel="noopener">
        <img src="https://storage.boxy-svg.com/artworks/-MPSjPvVrefkHbG3ABXH.svg" width="85px" height="85px"/>
        <p>Vivaldi</p>
      </a>
      <a href="https://opera.com" class="item" target="_blank" rel="noopener">
        <img src="https://storage.boxy-svg.com/artworks/-MPSjZQqixHfZReE2pX4.svg" width="85px" height="85px"/>
        <p>Opera</p>
      </a>
    </div>

    <p id="download-p">To download Boxy SVG <strong>desktop app</strong> go to the app store:</p>

    <div id="download-links">
      <a href="https://itunes.apple.com/us/app/boxy-svg/id611658502" class="item" target="_blank" rel="noopener">
        <img src="https://storage.boxy-svg.com/artworks/-N4NrZQgMzzO1SHNWbfU.svg"/>
      </a>

      <a href="https://flathub.org/apps/details/com.boxy_svg.BoxySVG" target="_blank" rel="noopener" id="flathub-link">
        <img id="flathub-badge" class="badge" alt="Download on Flathub"
             src="https://storage.boxy-svg.com/artworks/-N4NsvvrN3H9y2MEK066.svg"/>
      </a>
    </div>
  </div>
</section>

<section id="footer">
  <div class="inner">
    <a href="mailto:jarek@boxy-svg.com">Contact</a> ｜ © 2012-2024 Jarosław Foksa
  </div>
</section>