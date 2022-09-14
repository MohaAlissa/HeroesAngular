import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  names = [];
  images = [];
  constructor() {}
  addFriend(name: string, image: string) {
    // @ts-ignore
    this.names.push(name);
    // @ts-ignore
    this.images.push(image);
  }
}
