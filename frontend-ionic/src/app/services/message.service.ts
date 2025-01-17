import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(public toastController: ToastController) { }

  async show(message: string, isError: boolean = false) {

    if (window.innerWidth <= 600) {
      const toast = await this.toastController.create({
        color: !isError ? 'dark' : 'danger',
        header: message,
        positionAnchor: "mainPane",
        duration: 4000,
      });
      toast.present();
    } else {
      const toast = await this.toastController.create({
        color: !isError ? 'dark' : 'danger',
        header: message,
        duration: 4000,
      });
      toast.present();


    }
  }
}
