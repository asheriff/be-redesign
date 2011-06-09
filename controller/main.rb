class MainController < Controller
  def index
  end
  
  def bsa__basics(index=0)
    @selected_index = index.to_i
  end
end
