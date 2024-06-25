# @locustjs/mime
This utility library provides a handy Mime object that helps in finding mime of a file extension.

## Installation

NPM
```
npm i @locustjs/cache
```

## Usage
Example:

```javascript
	import Mime from '@locustjs/mime'

	console.log(Mime.getMimeType('.jpg'));	// "image/jpeg"
	console.log(Mime.getMimeType('.json'));	// "application/json"
	
	console.log(Mime.getExtension("myphoto.jpg"));	// ".jpg"
	console.log(Mime.getExtensions("image/jpeg"));	// ["jpeg", "jpg", "jpe"]
	console.log(Mime.getFullMime('.json'));
	/*
	{
		charSet: "UTF-8",
		compressible: true,
		extensions: "json, map",
		id: 137,
		source: "iana",
		value: "application/json",
	}
*/
```

## Classes

- `MimeProviderBase`: base abstract class of mime providers
- `MimeProviderDefault`: default implementation of MimeProviderBase.

### Properties
- `MimeTypes`: returns list of all mime types.
- `Mimes`: returns list of all mimes.

### Methods
- `getExtension (filenameOrExtension)`: returns extension of a file (withought dot character).
- `getFullMime (filenameOrExtension)`: returns full mime inforation for the given filename/extension.
- `getMimeType (filenameOrExtension)`: returns mime type of the given filename/extension.
- `getExtensions(mime)`: returns file extension of the given mime.

## Change default mime provider
Using `setMimeProvider()` function we can change mime provider object in `Mime` variable.

```javascript
import Mime, { MimeProviderBase, setMimeProvider} from '@locustjs/mime'

class MyMimeProvider extends MimeProviderBase {
	...
}

setMimeProvider(new MyMimeProvider())

console.log(Mime.getMimeType('.jpg'))
```
