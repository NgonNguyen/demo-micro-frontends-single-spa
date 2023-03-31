# This is the ReadMe file for micro frontends single spa framework

## reac-app project

Move to the folder react-app

```
cd react-app
```

Build project

```
npm run build:webpack
```

Move to the dist folder

```
cd \react-app\dist\
```

Start http server

```
npx http-server . --cors
```

We can open it with url: <a>http://localhost:8080</a>

## angular-app project

Move to the folder angular-app

```
cd angular-app
```

Build project

```
npm run build:single-spa:angular-app
```

Move to the dist folder

```
cd \angular-app\dist\angular-app\
```

Start http server

```
npx http-server . --cors
```

We can open it with url: <a>http://localhost:8081</a>

## angular-app-b project

Move to the folder angular-app-b

```
cd angular-app-b
```

Build project

```
npm run build:single-spa:angular-app-b
```

Move to the dist folder

```
cd \angular-app-b\dist\angular-app-b\
```

Start http server

```
npx http-server . --cors
```

We can open it with url: <a>http://localhost:8082</a>


## root config project

Move to the root folder 

```
cd demo-micro-frontends-single-spa
```

Start project

```
npm start
```
