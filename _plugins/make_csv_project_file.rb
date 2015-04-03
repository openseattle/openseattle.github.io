require 'yaml'
require 'csv'



class MakeCsvProjectFile < Jekyll::Command
  class << self

  	def generate_csv
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
    end

    def init_with_program(prog)
      prog.command(:cfacsv) do |c|
        c.syntax "cfacsv"
        c.description 'generate csv file for code for america from _data/projects.yml'
        c.action do |args, options|
          puts "hello"
        end
      end
    end
  end
end
