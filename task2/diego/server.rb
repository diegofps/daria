require 'sinatra'

set :public_folder, '.'

get '/' do
  send_file File.join(settings.public_folder, 'README.md')
end
