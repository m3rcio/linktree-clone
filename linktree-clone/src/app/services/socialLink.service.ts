import { SocialLinks } from "../models/sociallinks.model";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from "../../auth.service";

@Injectable({
    providedIn: 'root'
  })
  export class SocialLinkService {
    private apiBaseUrl = 'http://localhost:3000/api';
  
    constructor(private http: HttpClient, private authService: AuthService) { }
  
    criarSocialLink(socialLink: SocialLinks,user_id:string): Observable<SocialLinks> {
      user_id= this.authService.getUserId();
      const apiUrl = `${this.apiBaseUrl}/social-links/${user_id}`;
      return this.http.post<SocialLinks>(apiUrl, { socialLink, user_id: user_id });
    }
   
    atualizarSocialLink(SocialLink_id:number,SocialLinks: SocialLinks): Observable<SocialLinks> {
      const apiUrl = `${this.apiBaseUrl}/social-links/${SocialLink_id}`;
      return this.http.put<SocialLinks>(apiUrl, SocialLinks);
    }
  
    excluirSocialLink(idSocialLink: number): Observable<void> {
      const apiUrl = `${this.apiBaseUrl}/social-links/${idSocialLink}`;
      return this.http.delete<void>(apiUrl);
    }
  
    getSocialLinks(): Observable<SocialLinks[]> {
      const apiUrl = `${this.apiBaseUrl}/social-links`;
      return this.http.get<SocialLinks[]>(apiUrl);
    }
  
    getSocialLinksById(idSocialLinks: number): Observable<SocialLinks> {
      const apiUrl = `${this.apiBaseUrl}/social-links/${idSocialLinks}`;
      return this.http.get<SocialLinks>(apiUrl);
    }
  
    getSocialLinksByUserId(user_id: string): Observable<SocialLinks[]> {
      const apiUrl = `${this.apiBaseUrl}/social-links/user/${user_id}`;
      return this.http.get<SocialLinks[]>(apiUrl);
    }
  }