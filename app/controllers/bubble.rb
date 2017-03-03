input = [5,4,3,2,1]
keep_running = true

while keep_running do
  keep_running = false
  input.each_with_index do |each, index|
    if each > input[index + 1] do
      input[index] = input[index+1]
      input[index + 1] = each
      keep_running = true
    end
  end
end
puts input
