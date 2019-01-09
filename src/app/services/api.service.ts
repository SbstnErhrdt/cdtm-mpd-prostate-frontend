import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// The hostname of the backend
const host = 'http://localhost:5001';
// const host = '';
// The base path of the backend api
const basePath = host + '/api/1';


// The user
const currentUser = {};


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getBackendUrl() {
    return host;
  }

  getBackendPath() {
    return basePath;
  }


  createAuthorizationHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    headers = headers.append('Pragma', 'no-cache');
    headers = headers.append('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT');
    return headers
  }

  /**
   * getToken
   * @param loginData the username and password
   * @returns {Observable<R>}
   */
  getToken(loginData: any): any {
    return this.http.post<any>(basePath + '/login/jwt', loginData)
  }

  /**
   * Login
   * @param registerData the username and password
   * @returns {Observable<R>}
   */
  register(registerData) {
    return this.http.post(basePath + '/users', registerData);
  }

  /**
   * Login
   * @param loginData the username and password
   * @returns {Observable<R>}
   */
  login(loginData) {
    return this.http.post(basePath + '/login', loginData);
  }

  /**
   * Logout
   * @returns {Observable<R>}
   */
  logout() {
    return this.http.get(basePath + '/logout');
  }

  /*  ##################################################
   *  ENTITIES
   *  ##################################################
   *  ##################################################
   */

  /**
   * creates a new dataset of an entity
   * @param {string} entity the name of the entity
   * @param {object} data the data to be created in the database
   * @returns {Observable<R>}
   */
  createData(entity, data) {
    // console.log('[API]: createData', entity);
    const headers = this.createAuthorizationHeader();
    return this.http.post(basePath + '/' + entity, data, {headers: headers});
  }

  /**
   * gets all the data from an entity
   * @param {string} entity the name of the entity
   * @returns {Observable<R>}
   * TODO: pagination
   * TODO: search
   */
  readData(entity): any {
    // console.log('[API]: readData', entity);
    const headers = this.createAuthorizationHeader();
    return this.http.get<any>(basePath + '/' + entity,
      {headers: headers}
    );
  }

  /**
   * readData a specific dataset of an entity
   * @param {string} entity the name of the entity
   * @param {string} id the guid of the dataset
   * @returns {Observable<R>}
   */
  readSingleData(entity, id) {
    // console.log('[API]: readData', entity);
    const headers = this.createAuthorizationHeader();
    return this.http.get<any>(basePath + '/' + entity + '/' + id,
      {headers: headers});
  }

  /**
   * updates a specific dataset of an entity
   * @param {string} entity the name of the entity
   * @param id the guid of the dataset
   * @param {object} data
   * @returns {Observable<R>}
   */
  updateData(entity, id, data) {
    // console.log('[API]: updateData', entity);
    const headers = this.createAuthorizationHeader();
    let url = basePath + '/' + entity;
    if (id) {
      url = basePath + '/' + entity + '/' + id;
    }
    return this.http.put(url, data,
      {headers: headers});
  }

  /**
   * deletes a specific dataset of an entity
   * @param {string} entity the name of the entity
   * @param id the guid of the dataset
   * @returns {Observable<R>}
   */
  deleteData(entity, id) {
    // console.log('[API]: deleteData', entity);
    let url = basePath + '/' + entity;
    if (id) {
      url = basePath + '/' + entity + '/' + id;
    }
    const headers = this.createAuthorizationHeader();
    return this.http.delete(url,
      {headers: headers});
  }

  /**
   * Upload file
   * @param entity
   * @param data
   * @param files
   * @returns {Promise<T>}
   */
  uploadFiles(entity: string, data: any, files: File[]) {
    console.log('[API]: uploadFiles', entity);
    const headers = this.createAuthorizationHeader();
    const formData: FormData = new FormData();
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i], files[i].name);
      }
    } else {
      return
    }

    if (data !== '' && data !== undefined && data !== null) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          formData.append(property, data[property]);
        }
      }
    }
    return this.http.post(basePath + '/' + entity, formData, {
      headers: headers
    });
  }
}
