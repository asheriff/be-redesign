class MainController < Controller
  def index
    @subnav = nil
  end
  
  def bsa__about(index=0)
    @selected_index = index.to_i
    @subnav = subnav
    @page = "bsa/about"
  end
  
  def bsa__basics(index=0)
    @selected_index = index.to_i
    @subnav = subnav(5)
    @page = "bsa/basics"
  end
  
  def bsa__overview(index=0)
    @selected_index = index.to_i
    @subnav = subnav(10)
    @page = "bsa/overview"
  end
  
  private
  
    def subnav(dummy_items=0)
      links = [
        "Overview",
        "This Link Should Have The Very Longest Label"
      ]
      
      dummy_items.times{ links << Faker::Lorem.words( rand(4)+2 ).map{ |w| w.capitalize }.join(" ") }
      
      links << "Last Item In List"
      
      links
    end
end
