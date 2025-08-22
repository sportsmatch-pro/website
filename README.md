1.	Crea el projecte a Cloudflare Pages amb aquest repo
2. Com a build command posa:
```
npm run build
````
3. OUTPUT DIRECTORY
```
dist
``` 
4. Variables d'entorn
```
API_BASE_URL
CF_PAGES_URL
````

1. Deploy automàtic amb GitHub Actions (el que estem fent)
	•	L’Action cloudflare/pages-action@v1 que t’he posat al deploy.yml puja automàticament el build a Cloudflare Pages.
	•	Perquè això funcioni, GitHub ha de tenir accés al teu compte de Cloudflare.
	•	Per això cal afegir aquests secrets al GitHub repo:
    
Nom del secret.  -   Què conté.                           -   On aconseguir-lo.
CF_API_TOKEN.    -   Token d’API amb permisos per Pages.  -   Cloudflare → My Profile → API Tokens
CF_ACCOUNT_ID.   -   El teu Cloudflare Account ID.        -   Cloudflare Dashboard → Overview.
