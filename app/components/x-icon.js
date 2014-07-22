import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas',
  attributeBindings: ['x-tools', 'width', 'height', 'style'],
  'x-tools': 'icon',
  
  canvas: null,
  iconGroup: null,
  
  didInsertElement: function() {
    this.loadSVGFromURL();
  },
  
  detectImageType: function(){
    var src = this.get('src'),
        type,
        platform;
        
    if (src){
      type = src.split('.').pop().toLowerCase();
      
      if (src === "png"){
        this.drawImagePng();  
      } else if ( src === "svg" ){
        this.loadSVGFromURL();
      } else if ( src === "svg" ){
      } else {
        
      }
    }
  },
  loadSVGFromURL: function(css) {
    var elementId = this.get('elementId'),
        el = $('#' + elementId),
        src = this.get('src'),
        component = this,
        canvas,
        context,
        devicePixelRatio,
        backingStoreRatio,
        ratio,
        c;
        
        
    canvas = this.__canvas = new fabric.StaticCanvas(elementId);
    
    c = canvas.getElement();
    
    context = canvas.getContext('2d');
    
    this.set('canvas', canvas);
    
    //Retina Device fix
    devicePixelRatio = window.devicePixelRatio || 1,
    backingStoreRatio = context.webkitBackingStorePixelRatio ||
                        context.mozBackingStorePixelRatio ||
                        context.msBackingStorePixelRatio ||
                        context.oBackingStorePixelRatio ||
                        context.backingStorePixelRatio || 1,
    ratio = devicePixelRatio / backingStoreRatio;
    
    c.setAttribute('width', c.width * window.devicePixelRatio);
    c.setAttribute('height', c.height * window.devicePixelRatio);
    
    context.scale(ratio, ratio);
    
    fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
    
    fabric.loadSVGFromURL(src, function(objects, options) {
      var iconGroup = fabric.util.groupSVGElements(objects, options),
          fillColor = el.css('fill') || '#007aff';
      
      component.set('iconGroup', iconGroup);
      
      iconGroup.setFill(fillColor);
      
      
      iconGroup.set({
        left: canvas.width / 2,
        top: canvas.height / 2,
        scaleY: canvas.height / iconGroup.height,
        scaleX: canvas.width / iconGroup.width
      });
      
      canvas.add(iconGroup);
      canvas.centerObject(iconGroup);
      canvas.renderAll();
    });
    
  },
  
  updateIcon: function(options){
    var canvas = this.get('canvas'),
        iconGroup = this.get('iconGroup');
        
    iconGroup.set(options);
    canvas.renderAll();
  }.observes('iconProps')

});