# Quill Snow Sticky Toolbar
Module extension for [Quill.js](https://github.com/quilljs/quill) that make snow theme toolbar as sticky. 



## Usage
### Webpack/ES6

```javascript
const toolbarOptions = {
                        container: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['emoji'],   
                        ],
                        handlers: {'emoji': function() {}}
                        }
const quill = new Quill(editor, {
    // ...
    modules: {
        // ...
        toolbar: toolbarOptions,
        sticky_toolbar: true
    }
});
```

## Contributing

Please check out our [contributing guidelines](CONTRIBUTING.md).
