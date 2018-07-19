import { Injectable } from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import{ User }from './user'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList:AngularFireList<any>;
  selectedUser:User = new User();
  constructor(private firebase:AngularFireDatabase) { }

getData()
{
  this.userList = this.firebase.list('users');
  return this.userList;
}

insertUser(user:User){
this.userList.push({
  name:user.name,
  email:user.email
});
}

updateUser(user:User){
this.userList.update(user.$key,
  {
    name:user.name,
    email:user.email
  }
)
}

deleteUser($key:string){
  this.userList.remove($key);
}

}
