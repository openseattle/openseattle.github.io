require 'yaml'
require 'csv'

data_files = YAML.load_file('./_data/projects.yml')
header = %w[name description link_url code_url type categories status]

CSV.open("./projects/projects.csv", "wb") do |csv|
  csv << header
  data_files.each do |data|
  	placeholder = []
  	header.each { |header| data[header] ? placeholder << data[header] : placeholder << nil }
  	csv << placeholder
  end
end
