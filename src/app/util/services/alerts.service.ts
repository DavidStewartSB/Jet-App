import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from "sweetalert2";

@Injectable({
    providedIn: 'root'
})

export class SweetAlertService {
    constructor(){}

    public successSwal(message: string, title: string): void{
        this._showAlert(title, message, 'success')
    }
    public infoSwal(message: string, title: string): void{
        this._showAlert(title, message, 'info')
    }
    public errorSwal(message: string, title: string): void{
        this._showAlert(title, message, 'error')
    }

    private _showAlert(
        title: string,
        message: string,
        icon: SweetAlertIcon
    ): void {
        Swal.fire(title, message, icon)
    }

}