import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = (Math.random() > 0.5) ? 'online' : 'offline';

    getServerStatus() {
        return this.serverStatus;
    }

    getServerId() {
        return this.serverId;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}