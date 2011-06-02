module Ramaze; module Helper; module Html
  def css_position(collection, obj)
    obj == collection.first ? :first :
    obj == collection.last  ? :last :
                               nil
  end
  
  def page_class
    pagename = request.env["PATH_INFO"].
      sub('/','').
      gsub(%r!/\d*! ,'').
      gsub('/','_')
    
    "page_" << (pagename.empty? ? "home" : pagename)
  end
end; end; end
