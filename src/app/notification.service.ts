import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  private serviceID = "service_d2iq9fj"
  private templateID = "template_275kvi9";
  private userID = "n68qCBYP9kjLfsMXl"

  async sendStatusChangeNotification(taskTitle: string, taskStatus: string) {
    const templateParam = {
      to_name: 'Admin-Ram',
      task_Title: taskTitle,
      task_status: taskStatus
    };

    try {
      const responce = await emailjs.send(this.serviceID, this.templateID, templateParam, this.userID);
      alert("email send successfully");
      console.log('email send successfully');
    } catch (error) {
      alert('faild to send ');
      console.error("Ooops...!eamil fail to send");
    }
  }
}
