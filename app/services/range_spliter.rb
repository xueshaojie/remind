class RangeSpliter < Struct.new :min, :max
  def split
    range = max - min
    head, precision = range.to_s[0..0], [range.to_s[1..-1].size, 1].max
    step = case head.to_i
           when 1..2
             10 ** precision / 2
           when 3..5
             10 ** precision
           when 6..9
             10 ** precision * 2
           else
             10 ** 0
           end

    result = []
    loop do
      break if result.last.try(:max).to_i >= max
      left = result.last.try(:end) || min
      right = (left % step).zero? ? (left + step) : (step * (left.to_i / step.to_i).next)
      result.push(left..right)
    end
    return result
  end
end


 RangeSpliter.new(0, 1).split
