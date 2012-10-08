#!/usr/bin/env ruby
require 'yajl'
beginning_time = Time.now

total_rows = 0
json = File.new(ARGV[0], 'r')
parser = Yajl::Parser.new
parser.parse(json) do |hash|
  root = hash["rows"]
  root.each do |row|
  	total_rows+=1
  end
end

end_time = Time.now

puts "Parse: #{((end_time - beginning_time)*1000).ceil}ms"