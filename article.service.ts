
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';



import { map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse ,HttpHeaders } from '@angular/common/http';

import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
//import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType,HttpHeaders } from  '@angular/common/http';


//import { map } from  'rxjs/operators';
import { Article } from './article';
import { catchError } from 'rxjs/operators';


//import { Observable, throwError } from 'rxjs';
//import { catchError } from 'rxjs/operators';



@Injectable()
export class ArticleService {
    //URLs for CRUD operations
    allArticlesUrl = "http://localhost:9090/user/all-articles";
    articleUrl = "http://localhost:9090/user/article";
    //Create constructor to get Http instance
    constructor(private httpClient:HttpClient) { 
    }



    

    //Fetch all articles
//     getAllArticles(): Observable<Article[]> {
//       return this.http.get<Article[]>(this.allArticlesUrl)
       
//        .pipe(map(this.extractData).catch(this.handleError)); 

//   }



  getAllArticles(): Observable<Article[]> {
   



       return this.httpClient.get<Article[]>(this.allArticlesUrl)
       .pipe(catchError(this.handleError));


}


private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
    } else {
        console.error('Server Side Error :', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
}

    //Create article
     createArticle(article: Article):Observable<number> {
        return this.httpClient.post<number>(this.articleUrl, article, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })  
        })
        .pipe(catchError(this.handleError));

    }


        







    //Fetch article by id
    getArticleById(articleId: string): Observable<Article> {
		
	
	return this.httpClient.get<Article>(`${this.articleUrl}/${articleId}`)
   


                   .pipe(catchError(this.handleError));

    }	

  


     //Update article
      updateArticle(article: Article):Observable<number> {
        return this.httpClient.put<number>(`${this.articleUrl}/${article.articleId}`, article, {
           
        })
            .pipe(catchError(this.handleError));
     }
     //Delete article	
     deleteArticleById(articleId: string): Observable<number> {
	 
        return this.httpClient.get<number>(`${this.articleUrl}/${articleId}`)
   


        .pipe(catchError(this.handleError));
     }
    //\ private handleError (error: Response | any) {
	// console.error(error.message || error);
	// return Observable.throw(error.status);
    // }
} 