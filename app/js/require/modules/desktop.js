'use strict';

class desktopModule extends ExternalModule {
  constructor(filePath,document) {
    super(filePath,document);
    this.container = 'left';
    this.refreshRate = 4000;
    this.script = path.join(__dirname, "../../../sh/getdesktop.sh");
  }

  updateOutput() {
    var desktop = this.desktop

    // Check if the desktop has changed (and therefore needs a redraw)
    if ($("#desktop-output").text() != desktop) {
      $("#desktop-output").text(desktop)
    }
  }


  updateDesktop() {

    this.desktop = execSync(`sh ${this.script}`) // or fab fa-apple
  }

  update() {
    this.updateDesktop()
    this.updateOutput()
  }

  get HTMLContent() {
    var moduleName = this.fileName;
    return  `<div class="widg pinned green" id="${moduleName}">
        <span class="output" id="${moduleName}-output"> ? </span>
        </div>
      </div>`
  }
}

exports.module = desktopModule;
