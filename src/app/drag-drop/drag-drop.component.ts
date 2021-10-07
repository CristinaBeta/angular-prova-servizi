import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-drag-drop",
  templateUrl: "./drag-drop.component.html",
  styleUrls: ["./drag-drop.component.css"],
})
export class DragDropComponent {
  /*Usando @ViewChild possiamo facilmente iniettare componenti, direttive o semplici elementi DOM. 
  può prendere in input anche una classe di componente quando vogliamo accedere alla reference di un componente: @ViewChild(MioComponente)
  In questo caso avremo accesso anche a tutti i metodi di quel componente, in maniera type safe.*/
  @ViewChild("fileDropRef", { static: false }) fileDropEl!: ElementRef;       //Il decoratore @ViewChild ci consente di iniettare in un componente riferimenti a elementi utilizzati all'interno del suo template.
  files: any[] = [];

  //quando trascino file
  onFileDropped($event: any[]) {
    this.prepareFilesList($event);
  }

  fileBrowseHandler(files: any[]) {
    this.prepareFilesList(files);
  }

  //cancella file tramite index
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    this.files.splice(index, 1);
  }

  //simula processo di upload
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  //converte la lista di file in arrayList
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.fileDropEl.nativeElement.value = "";
    this.uploadFilesSimulator(0);
  }

  //quanti byte è
  formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
}
