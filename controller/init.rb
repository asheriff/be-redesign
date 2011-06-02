class Controller < Ramaze::Controller
  helper :xhtml
  helper :html
  helper :html5
  
  engine :Haml
  
  layout do |path, wish|
    case
      when request.xhr? then nil
      else :default
    end
  end
end

require __DIR__('main')
require __DIR__('css')
