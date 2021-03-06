import { Injectable } from "@angular/core";

import { STORAGE_KEYS } from "src/config/storage_keys.config";

@Injectable()
export class StorageService {

  getLocalUser(): any {
    let user = localStorage.getItem(STORAGE_KEYS.localUser)
    if (user === null) {
      return null
    } else {
      return JSON.parse(user)
    }
  }

  setLocalUser(obj: any) {
    if (obj === null) {
      localStorage.removeItem(STORAGE_KEYS.localUser)
    } else {
      localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj))
    }
  }

}