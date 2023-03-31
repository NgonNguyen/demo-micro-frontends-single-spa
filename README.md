# This is the ReadMe file for micro frontends single spa.

## Install single spa

```
npm i -g create-single-spa
```

## Create single spa with root config

```
create-single-spa
```

Select options as below:

```
Directory for new project: .
Select type to generate: single-spa root config
Which package manager do you want to use? npm
Will this project use TypeScript? (y/N) y
Would you like to use single-spa Layout Engine (Y/n) y
Organization name (can use letters, numbers, dash or underscore) app
```

Start project

```
npm start
```

## Create single spa Angular

```
create-single-spa
```

Select options as below:

```
Directory for new project: .

Select type to generate: single-spa application / parcel

Which framework do you want to use? angular

? Project name (can use letters, numbers, dash or underscore) app-angular

? Would you like to add Angular routing? Yes

? Which stylesheet format would you like to use? CSS

The package single-spa-angular@8.1.0 will be installed and executed.
Would you like to proceed? (Y/n) y

Does your application use Angular routing? (Y/n) y
```

Move to app-angular

```
cd app-angular
```

Update src\app\app-routing.module.ts

```
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Create src\environments folder

```
mkdir src\environments
```

Create src\environments\environment.ts

```
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

```

Create src\environments\environment.prod.ts

```
export const environment = {
  production: true,
};

```

Install packages

```
npm i
```

## Create single spa React

```
create-single-spa
```

Select options as below:

```
Directory for new project: .

Select type to generate: single-spa application / parcel

Which framework do you want to use? angular

? Project name (can use letters, numbers, dash or underscore) app-angular

? Would you like to add Angular routing? Yes

? Which stylesheet format would you like to use? CSS

The package single-spa-angular@8.1.0 will be installed and executed.
Would you like to proceed? (Y/n) y

Does your application use Angular routing? (Y/n) y
```

Move to app-angular

```
cd app-angular
```

Select options as below:

```
Directory for new project app-react

Select type to generate single-spa application / parcel

Which framework do you want to use? react

Which package manager do you want to use? npm

Will this project use Typescript? Yes

Organization name (can use letters, numbers, dash or underscore) app-react

Project name (can use letters, numbers, dash or underscore) app-react
```

Install packages

```
npm i
```