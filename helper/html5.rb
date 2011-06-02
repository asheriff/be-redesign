module Ramaze; module Helper; module Html5
  def ie_tag(name=:body, attrs={}, &block)
    # attrs.symbolize_keys!
    haml_concat("<!--[if lt IE 7]> #{ tag(name, add_class('ie ie6 lte7 lte8 lte9', attrs), true) } <![endif]-->")
    haml_concat("<!--[if IE 7]>    #{ tag(name, add_class('ie ie7 lte7 lte8 lte9', attrs), true) } <![endif]-->")
    haml_concat("<!--[if IE 8]>    #{ tag(name, add_class('ie ie8 lte8 lte9', attrs), true) } <![endif]-->")
    haml_concat("<!--[if IE 9]>    #{ tag(name, add_class('ie ie9 lte9', attrs), true) } <![endif]-->")
    haml_concat("<!--[if gt IE 9]><!-->")
    haml_tag name, add_class('', attrs) do
      haml_concat("<!--<![endif]-->")
      block.call
    end
  end

  def ie_html(attrs={}, &block)
    ie_tag(:html, attrs, &block)
  end

  def ie_body(attrs={}, &block)
    ie_tag(:body, attrs, &block)
  end

  def tag(tagname, attrs={}, open=false)
    close = open ? '' : ' /'
    s = attrs.to_a.map{ |x| " #{x[0]}='#{x[1]}'" }.join("")
    "<#{tagname}#{s}#{close}>"
  end

private

  def add_class(name, attrs)
    classes = attrs[:class] || ''
    classes.strip!
    classes = ' ' + classes if !classes.blank?
    classes = name + classes
    attrs.merge(:class => classes)
  end

end; end; end
