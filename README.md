# **eminmuhammadi/emeega**
### Open source PHP environment for React JS projects. Make PHP great Again !

## Security
```
	location ~ /(api/v1/(lib/|vendor/|package.json|.*\.(gitignore|md|lock)$|LICENSE|.gitignore)|node_modules/|assets/|src/|vendor/|LICENSE|package.json|.*\.(env|env.sample|config.js|lock|md|yml)$|.git/|.github/) {
	 	deny all;
		return 403;
        }
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installing

```bash
git clone https://github.com/eminmuhammadi/emeega.git
```    
For installing this project, individuals should run this bash command
```bash
composer install && npm install
```
### Production
```bash
npm run build:prod
```
or
```bash
./node_modules/.bin/encore production
```
### Development
```bash
npm run build:dev
```
or
```bash
./node_modules/.bin/encore dev --watch
```

## Configuration
```bash
cp .env.sample .env
```

```text
PUBLIC_URL= YOUR_URL_HERE
```

## Assets
[+] React Files

 |  -- assets/js/

[+] SCSS (SASS)

 |  -- assets/scss/

[+] HTML (PHP Twig)

 |  -- assets/view/

## Authors
* **Emin Muhammadi** - *Initial work* - [eminmuhammadi](https://github.com/eminmuhammadi)

See also the list of [contributors](https://github.com/eminmuhammadi/emeega/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
