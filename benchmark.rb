
@json_file = "./file.json"
@cycles = 10

@list_of_folders = Dir.glob('*').select {|f| File.directory? f}

@global_totals = Hash.new


puts "About to run benchmarks for all folders inspected.\nEach test will be executed #{@cycles} times."

def run_single_benchmark(full_path_to_executable)
	command=full_path_to_executable + " " +@json_file
	total=`#{command}`
	total.gsub(/\D/, "")
end


def run
	@cycles.times{ @list_of_folders.each do |folder|
			file_to_execute =Dir.glob("./#{folder}/*").select{|f| File.executable? f and !File.directory? f}.first
			total=run_single_benchmark file_to_execute
			
			if !@global_totals[folder]
				@global_totals[folder] =0
			end

			@global_totals[folder]+=total.to_i

		end
		
	}
	print_totals
	
	
end


def print_totals
@global_totals.each{|key, value| 
	puts "For [#{key}] average is:" + (value/@cycles).to_s
	}
end



run

