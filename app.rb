require 'rubygems'
require 'ramaze'
require 'faker'
require 'ostruct'
begin
  require 'ruby-debug'
rescue LoadError
end

require __DIR__('lib/extensions')

Ramaze.options.roots = [__DIR__]

require __DIR__('model/init')
require __DIR__('controller/init')
require __DIR__('controller/routes')
