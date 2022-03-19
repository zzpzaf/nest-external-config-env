# nest-external-config-env
-------
![nest-external-config-env](https://user-images.githubusercontent.com/41330248/158634788-cec2289c-2e91-47b8-abd8-a23fcdc6534e.png)

-------
#### <https://github.com/zzpzaf/nest-external-config-env.git>

**[Nest](https://github.com/nestjs/nest) REST API - externally defined variables** 

This repo provides a fundamental base to continue developing towards a NestJS REST API example. Actually, it is the necessary base for the next step which is about adding JWT and Passport JWT-Strategy support for your NestJS REST API Project.

#### **Repo’s key points**

- The repo (as in the [NestJS Documentation](https://docs.nestjs.com/security/authentication#implementing-passport-strategies)) already includes both the AuthModule and the UsersModule respectively, as well as their Controller and Service classes. 
- Instead of using the UsersService for the basic CRUD operations, the repo uses a separate @injectable class, the DbRepo. It serves both the AuthService and the UsersService.
  - The DbRepo obtains some users in an array that they have been pre-set in UserDB class.
- [class-validator](https://www.npmjs.com/package/class-validator) and [class-transformer](https://www.npmjs.com/package/class-transformer) packages are installed. DTOs and entities are defined in the src/dataObjects folder, and they are decorated accordingly. [See more at my post at [MEDIUM](https://medium.com/@zzpzaf.se/nestjs-rest-api-class-validator-class-transformer-bf7a0e6b311a) or at my [site](https://www.devxperiences.com/pzwp1/2022/03/14/nestjs-rest-api-class-validator-class-transformer/)]
- The repo uses externally defined variables, so the [@nestjs/config](https://www.npmjs.com/package/@nestjs/config) package is already installed, and it is declared globally in AppModule. The external variables are defined in the src/config/.env.dev file.  [See more at my post at [Better Programming](https://betterprogramming.pub/step-ahead-fast-with-nestjs-environment-configuration-406701b3379f) (at MEDIUM) or at my [site](https://www.devxperiences.com/pzwp1/2022/01/26/step-ahead-fast-with-nestjs-environment-configuration/)]
- Also, the repo uses the [Joi](https://joi.dev/) schema validation pro-tool (which is also is being used in  [NestJS Documentation](https://docs.nestjs.com/pipes#object-schema-validation) for **object schema** validation). Moreover, a JSON object schema validator has been defined and decorated (using the appropriate Joi property decorators) in the src/config/config.schema.ts file. It is being used for the externally defined variables in the src/config/.env.dev file.

## Clone this Repo

Use the url of this repo https://github.com/zzpzaf/nest-external-config-env.git to clone it. e.g.,

`git clone https://github.com/zzpzaf/nest-external-config-env.git`

## License
[MIT](https://choosealicense.com/licenses/mit/)

