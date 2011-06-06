require 'sass'
require 'compass'

class CssController < Ramaze::Controller
  map '/css'
  engine :Sass
  
  trait :sass_options => {
    :style => :expanded,
    :load_paths => [
      __DIR__('../view/css'),
      '/usr/lib/ruby/gems/1.8/gems/compass-0.11.1/frameworks/compass/stylesheets',
    ]
  }
end