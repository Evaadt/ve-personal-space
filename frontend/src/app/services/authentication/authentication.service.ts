import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

interface AuthResponse {
  status: string;
  message: string;
  payload: {
    user: any; // Defina uma interface mais específica para o User, se tiver
    token: string;
  } | null;
  error?: string; // Para erros do backend
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any | null>;
  public currentUser: Observable<any | null>;

  constructor(private http: HttpClient) {
    // Tenta carregar o utilizador do localStorage ao iniciar o serviço
    const storedUser = typeof window !== 'undefined' ? localStorage.getItem('currentUser') : null;
    this.currentUserSubject = new BehaviorSubject<any | null>(
      storedUser ? JSON.parse(storedUser) : null
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any | null {
    return this.currentUserSubject.value;
  }

  loginByAuth(credentials: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.API}login`, credentials)
  }

  logout(): Observable<AuthResponse> {
    // Faz a requisição de logout para o backend
    return this.http.post<AuthResponse>(`${environment.API}logout`, {})
  }

  // Método para obter o token (útil para adicionar em interceptors)
  getToken(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
  }

  // Método para verificar se o utilizador está autenticado
  isAuthenticated(): boolean {
    return !!this.getToken() && !!this.currentUserValue;
  }
}