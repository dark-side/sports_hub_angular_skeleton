# Sports-Hub Application Angular Front-End

## Project Description

This is a draft pet project for testing Generative AI on different software engineering tasks. It is planned to evolve and grow over time. Specifically, this repo will be an Angular playground.

The application's legend is based on the sports-hub application description from the following repo: [Sports-Hub](https://github.com/dark-side/sports-hub).

## Available Back-End applications
[Ruby on Rails](https://github.com/dark-side/sports_hub_ruby_skeleton),
[PHP](https://github.com/dark-side/sports_hub_php_skeleton),
[Node.js](https://github.com/dark-side/sports_hub_nodejs_skeleton),
[Java](https://github.com/dark-side/sports_hub_java_skeleton),
[.Net](https://github.com/dark-side/sports_hub_net_skeleton),
[C++](https://github.com/dark-side/sports_hub_cpp_skeleton),
[Go](https://github.com/dark-side/sports_hub_go_skeleton),
[Python](https://github.com/dark-side/sports_hub_python_skeleton)  

This application can be started with a `docker compose` using the Back-End applications mentioned.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Dependencies

- Docker
- Docker Compose

The mentioned dependencies can be installed using the official documentation [here](https://docs.docker.com/compose/install/).
[Podman](https://podman-desktop.io/docs/compose) can be used as an alternative to Docker.

## Setup and Running the Application

### Clone the Repositories

To run the web application with the back-end, clone the following repository within the same folder:

```sh
#Ruby
git clone git@github.com:dark-side/sports_hub_ruby_skeleton.git

#PHP
git clone git@github.com:dark-side/sports_hub_php_skeleton.git

#Node.js
git clone git@github.com:dark-side/sports_hub_nodejs_skeleton.git

#Java
git clone git@github.com:dark-side/sports_hub_java_skeleton.git

#.Net
git clone git@github.com:dark-side/sports_hub_net_skeleton.git

#C++
git clone git@github.com:dark-side/sports_hub_cpp_skeleton.git

#Go
git clone git@github.com:dark-side/sports_hub_go_skeleton.git

#Python
git clone git@github.com:dark-side/sports_hub_python_skeleton.git
```

### Change Frontend

In docker-compose.yml at the back-end application directory change the front-end directory to the current one:

```sh
  frontend:
    build: ../sports_hub_angular_skeleton <--- Here
    depends_on:
      - backend
    ports:
      - 3000:3000
    restart: always
    <<: *frontend-variables
```

### Run Docker Compose

Navigate to the back-end application directory and run (`-d` for detached mode to run in the background):

```sh
docker compose up -d
```


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## License

Licensed under either of

- [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
- [MIT license](http://opensource.org/licenses/MIT)

Just to let you know, at your option.

## Contribution
Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in your work, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.

**Should you have any suggestions, please create an Issue for this repository**
