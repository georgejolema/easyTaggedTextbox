(function () {
    $.fn.taggedTextbox=taggedTextbox;
    
    function taggedTextbox(options, text) {
        var self=this;
        if (options == "getElements") {
            var taggedTextboxList = this[0].taggedTextbox;
            return taggedTextboxList.items;
        }
        else if(options == "clear"){
            var taggedTextboxList = this[0].taggedTextbox;
            taggedTextboxList.Clear();
        }
        else if(options == "add"){
            var taggedTextboxList = this[0].taggedTextbox;
            taggedTextboxList.AddTag(text);
        }
        else if(options=="getTextbox"){
            var taggedTextboxList = this[0].taggedTextbox;
            return taggedTextboxList.GetTextbox();
        }
        else{
            this[0].taggedTextbox = new TaggedTextboxList(this);
        }
        return this;
    }
    
    function TaggedTextboxList(element) {
        var self = this;
        this.element = element;
        this.element
            .addClass('form-control')
            .addClass('easy-tagged-textbox-container')
            .append('<span class="easy-tag-tags"></span>')
            .append('<input class="easy-tagged-text" type="text"/>')
            .on('click', function () {
                $(this).find('.easy-tagged-text').focus();
            })
            .find('.easy-tagged-text')
            .on('keydown', function (ev) {
                if(ev.which === 13) {
                    var text=$(this).val();
                    TaggedTextboxList.prototype.AddTag.call(self, text);
                    $(this).val('');
                    return false;
                }
            });

        this.items=[];

    }
    TaggedTextboxList.prototype.GetTextbox = function () {
      return this.element.find('.easy-tagged-text')[0];
    };
    TaggedTextboxList.prototype.AddTag = function (text) {
        if(text=='')return;
        var items=this.items,
            easyTags=this.element.find('.easy-tag-tags');
        for(var i=0; i<items.length; i++){
            if(items[i]==text){
                return;
            }
        }
        $('<span class="item-tag btn-primary">'+htmlEscape(text)+'</span>')
            .append($('<a href="#" class="destroy-tag"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>').on('click', TaggedTextboxList.prototype.RemoveTag.call(this, text)))
            .appendTo(easyTags);
        items.push(text);
    };

    TaggedTextboxList.prototype.RemoveTag = function RemoveTag(text) {
        var items=this.items;
        return function (ev) {
            ev.preventDefault();

            for(var i=0;i<items.length;i++){
                if(items[i]==text){
                    items.splice(i,1);
                    break;
                }
            }
            $(this).parent().remove();
        };
    };

    TaggedTextboxList.prototype.Clear = function () {
        this.element.find('.easy-tag-tags').empty();
        this.items=[];
    };

    function htmlEscape(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\//g, '&#x2F;');
    }
})();