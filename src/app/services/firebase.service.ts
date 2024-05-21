import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUpload } from '../components/admin/admin-home/admin-home.component';
import { Observable, finalize } from 'rxjs';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  newFilePath = '';
  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase) { }
  pushFileToStorage(
    fileUpload: FileUpload): Observable<number> {
      const uuidRandom = uuid();
      const folderPath = 'cakes/';
      const storagePath = folderPath + uuidRandom;
      const storageRef = this.storage.ref(storagePath);
    
      const uploadTask = this.storage.upload(storagePath, fileUpload.file);
      
    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadURL) => {
            fileUpload.url = downloadURL;
            this.newFilePath = downloadURL;
            fileUpload.name = fileUpload.file.name;
            this.saveFileData(fileUpload);
          });
        })
      )
      .subscribe();
    return uploadTask.percentageChanges() as Observable<number>;
  }
  private saveFileData(fileUpload: FileUpload): void {
    this.db.list("/cakes").push(fileUpload);
  }
  getExtendsionFile(fileName: string) {
    return fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2);
  }
}
