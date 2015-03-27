require 'yaml'
require 'csv'

data_files = YAML.load_file('./_data/projects.yml')
header = %w[name description link_url code_url type categories status]

CSV.open("./projects/projects.csv", "wb") do |csv|
  csv << header
  data_files.each do |data|
  	row = []
  	header.each { |header| data[header] ? row << data[header] : row << nil }
  	csv << row
  end
end
