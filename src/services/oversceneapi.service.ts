// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { OverSceneApiGlobal }   from '../models/oversceneapi-global.model';

@Injectable()
export class OverSceneApiService {

    // http://www.over-scene.com/wp-json/posts?type=tribe_events&filter[tribe_events_cat]=\(_tribeEventCat)

    private baseUrl: string = 'https://newsapi.org/v1/articles';
    private source: string = 'ign';
    private apiKey: string = 'eca3554b3014450f95a8451452d84fa3';

    constructor(private http: Http) {

    }

    public getArticles(): Promise<OverSceneApiGlobal> {
        const url = `${this.baseUrl}?source=${this.source}&sortBy=top&apiKey=${this.apiKey}`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as OverSceneApiGlobal)
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

}