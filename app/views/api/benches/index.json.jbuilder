json.array!(@benches) do |bench|
  json.extract!(
    bench,
    :id, :lat, :lng, :description
  )
end
