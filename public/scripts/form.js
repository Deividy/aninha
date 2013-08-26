Form = (function() {
    function Form(tpls) {
        this.tpls = tpls;
        this.html = [ ];
        this.fields = [ ];
    };
    
    function makeFormField(type, name, label, options, descLabel) {
        if (type == 'text') {
            return {
                formField: 'input',
                type: 'text',
                label: label,
                name: name
            };
        }
        if (type == 'textarea') {
            return { formField: 'textarea', label: label, name: name }
        }
        if (type == 'radio' || type == 'checkbox') {
            if (!options) {
                options = [ ];
            }
            for (var i = 0; i < options.length; i++) {
                var o = options[i];
                if (!_.isArray(o)) {
                    o = [ o ];    
                }
                options[i] = makeOption.apply(this, o);
            }
            return {
                formField: 'options',
                type: type,
                name: name,
                label: label,
                options: options,
                hasDesc: descLabel || false,
                descLabel: descLabel
            }
        }
    }

    function makeOption (label, btnClass) {
        return { label: label, btnClass: btnClass || 'default' };
    }

    Form.prototype.addFields = function (/* fields ... */) {
        var me = this;

        for (var i = 0; i < arguments.length; i++) {
            (function (field) {
                me.fields.push(makeFormField.apply(me, field));
            }(arguments[i]));
        }
    };
    Form.prototype.render = function (el) {
        var me = this;

        $.each(this.fields, function (index, field) {
            me.html.push(me.tpls[field.formField](field));
        });

        $(el).html(this.html.join(" "));
    };

    return Form;
}());
