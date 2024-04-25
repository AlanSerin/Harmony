import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import {
  bootstrapFolderFill,
  bootstrapDashCircleDotted,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ bootstrapFolderFill, bootstrapDashCircleDotted })],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent {
  selectedFolder: number = 0;
  selectedNote: number = 0;
  folders: Folder[] = [
    {
      id: 0,
      name: 'asdasd',
      notes: [
        {
          id: 0,
          text: 'pasaport fotokopisi (fotoğraf ve kimlik bilgilerinin yazılı olduğu sayfa)',
          date: '10/04/2024',
        },
        {
          id: 1,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et congue magna. Morbi est metus, consequat vitae nisi nec, ornare consectetur dolor. Duis hendrerit tincidunt sapien a imperdiet. Morbi iaculis id purus eu tempus. Cras imperdiet leo imperdiet mi aliquam, eu tincidunt justo placerat. Integer in ipsum at ante volutpat consequat. Vivamus ornare pretium pulvinar. Suspendisse elementum ultricies purus, non volutpat purus euismod nec. Nulla varius felis quis molestie mollis.          ',
          date: '10/04/2024',
        },
        {
          id: 2,
          text: 'Donec feugiat volutpat placerat. Aliquam erat volutpat. In semper non nulla ac placerat. Quisque quis dolor semper, ultricies lacus a, fermentum ante. Vestibulum dui arcu, aliquet quis nulla ac, blandit tempus arcu. Aliquam aliquam sem vitae nisl vestibulum posuere. Donec vel mi et urna molestie rhoncus id nec eros. Mauris erat orci, finibus et porta eu, porta non nunc.          ',
          date: '10/04/2024',
        },
        {
          id: 3,
          text: 'Fusce turpis sem, volutpat id rutrum id, dapibus vel ipsum. Phasellus molestie fermentum libero in accumsan. Cras consectetur eget odio ut accumsan. Ut venenatis turpis non pulvinar ultrices. Phasellus id urna a ipsum aliquam volutpat. Duis faucibus a nisl ut fringilla. Proin mollis pharetra neque, sit amet cursus augue convallis ac. Duis rutrum quam massa. Cras libero sem, imperdiet eu maximus vitae, pulvinar et arcu. Vestibulum auctor pretium nisi vel tincidunt. Fusce fermentum sapien vel elit rhoncus, nec placerat nulla mollis. Vestibulum pellentesque nunc porttitor ante viverra, nec dignissim felis commodo. Etiam feugiat mollis pellentesque. Nulla eget venenatis nibh. Nulla posuere ante a ex bibendum ultrices. Duis lacinia purus augue, et pretium urna placerat quis.          ',
          date: '10/04/2024',
        },
      ],
    },
    {
      id: 1,
      name: 'work',
      notes: [
        {
          id: 4,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et congue magna. Morbi est metus, consequat vitae nisi nec, ornare consectetur dolor. Duis hendrerit tincidunt sapien a imperdiet. Morbi iaculis id purus eu tempus. Cras imperdiet leo imperdiet mi aliquam, eu tincidunt justo placerat. Integer in ipsum at ante volutpat consequat. Vivamus ornare pretium pulvinar. Suspendisse elementum ultricies purus, non volutpat purus euismod nec. Nulla varius felis quis molestie mollis.          ',
          date: '10/04/2024',
        },
        {
          id: 5,
          text: 'pasaport fotokopisi (fotoğraf ve kimlik bilgilerinin yazılı olduğu sayfa)',
          date: '10/04/2024',
        },
        {
          id: 6,
          text: 'Fusce turpis sem, volutpat id rutrum id, dapibus vel ipsum. Phasellus molestie fermentum libero in accumsan. Cras consectetur eget odio ut accumsan. Ut venenatis turpis non pulvinar ultrices. Phasellus id urna a ipsum aliquam volutpat. Duis faucibus a nisl ut fringilla. Proin mollis pharetra neque, sit amet cursus augue convallis ac. Duis rutrum quam massa. Cras libero sem, imperdiet eu maximus vitae, pulvinar et arcu. Vestibulum auctor pretium nisi vel tincidunt. Fusce fermentum sapien vel elit rhoncus, nec placerat nulla mollis. Vestibulum pellentesque nunc porttitor ante viverra, nec dignissim felis commodo. Etiam feugiat mollis pellentesque. Nulla eget venenatis nibh. Nulla posuere ante a ex bibendum ultrices. Duis lacinia purus augue, et pretium urna placerat quis.          ',
          date: '10/04/2024',
        },
      ],
    },
    {
      id: 2,
      name: 'test',
      notes: [
        {
          id: 7,
          text: 'Donec feugiat volutpat placerat. Aliquam erat volutpat. In semper non nulla ac placerat. Quisque quis dolor semper, ultricies lacus a, fermentum ante. Vestibulum dui arcu, aliquet quis nulla ac, blandit tempus arcu. Aliquam aliquam sem vitae nisl vestibulum posuere. Donec vel mi et urna molestie rhoncus id nec eros. Mauris erat orci, finibus et porta eu, porta non nunc.          ',
          date: '10/04/2024',
        },
        {
          id: 8,
          text: 'Fusce turpis sem, volutpat id rutrum id, dapibus vel ipsum. Phasellus molestie fermentum libero in accumsan. Cras consectetur eget odio ut accumsan. Ut venenatis turpis non pulvinar ultrices. Phasellus id urna a ipsum aliquam volutpat. Duis faucibus a nisl ut fringilla. Proin mollis pharetra neque, sit amet cursus augue convallis ac. Duis rutrum quam massa. Cras libero sem, imperdiet eu maximus vitae, pulvinar et arcu. Vestibulum auctor pretium nisi vel tincidunt. Fusce fermentum sapien vel elit rhoncus, nec placerat nulla mollis. Vestibulum pellentesque nunc porttitor ante viverra, nec dignissim felis commodo. Etiam feugiat mollis pellentesque. Nulla eget venenatis nibh. Nulla posuere ante a ex bibendum ultrices. Duis lacinia purus augue, et pretium urna placerat quis.          ',
          date: '10/04/2024',
        },
      ],
    },
  ];

  get currentFolder() {
    return this.folders.find((folder) => folder.id === this.selectedFolder);
  }

  get currentNote() {
    return this.currentFolder?.notes.find(
      (note) => note.id === this.selectedNote
    );
  }

  selectFolder(id: number) {
    this.selectedFolder = id;
    this.selectedNote = this.currentFolder?.notes[0].id || 0;
  }
  selectNote(id: number) {
    this.selectedNote = id;
  }

  deleteFolder(id: number) {
    this.folders.splice(
      this.folders.findIndex((folder) => folder.id === id),
      1
    );
  }
}

interface Note {
  id: number;
  text: string;
  date: string;
}

interface Folder {
  id: number;
  name: string;
  notes: Note[];
}
